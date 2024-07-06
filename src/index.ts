export class TestClass {
  status = false;
  public RAII(): void {
    using _ = cleanup(() => (this.status = true));
  }
}

export function cleanup(cb: () => void): Disposable {
  return {
    [Symbol.dispose](): void {
      cb();
    },
  };
}

(() => {
  const obj = new TestClass();
  obj.RAII();
})();
