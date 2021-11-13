/* eslint-disable @typescript-eslint/no-explicit-any */
type Fn<A, B> = (_: A) => B;

/**
 * Pipelining Functions with InitialValues
 * Usage:
 *  pipe(func1, func2, func3)(initialValue)
 *
 * Void Type Would be Optional
 */
export const pipe = <
  A extends any,
  B extends any,
  C extends any = void,
  D extends any = void,
  E extends any = void,
  F extends any = void,
  G extends any = void,
  H extends any = void
>(
  func1: Fn<A, B | PromiseLike<B>>,
  func2: Fn<B, C | PromiseLike<C>>,
  func3?: Fn<C, D | PromiseLike<D>>,
  func4?: Fn<D, E | PromiseLike<E>>,
  func5?: Fn<E, F | PromiseLike<F>>,
  func6?: Fn<F, G | PromiseLike<G>>,
  func7?: Fn<G, H | PromiseLike<H>>
) => {
  const functions = [func1, func2, func3, func4, func5, func6, func7].filter(
    (fn) => fn !== undefined
  );

  return (input?: any) =>
    functions.reduce(
      (chain, func) => chain.then(func as any),
      Promise.resolve(input)
    );
};

/**
 *  If-Else를 대체하는 함수
 *  TODO: case, else Curry함수를 받을 때 Pipelining 지원
 */
export const match = <T>(target: T) => {
  let matched = false;
  function _body() {
    // for closure purpose
  }

  function _case(val: T) {
    if (matched) return () => _body;

    return (fn: any) => {
      if (target === val) {
        matched = true;
        fn();
      }
      return _body;
    };
  }

  function _else() {
    if (matched) return () => _body;

    return (fn: any) => {
      fn();
      return _body;
    };
  }

  _body.case = _case;
  _body.else = _else;

  return _body;
};
