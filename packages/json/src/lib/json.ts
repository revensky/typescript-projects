import 'core-js/modules/esnext.symbol.metadata.js';
import 'core-js/modules/esnext.function.metadata.js';

export function logger(msg: string): Function {
  return function (value: Function, context: ClassMethodDecoratorContext) {
    console.log('return function', value, context);
    context.metadata[context.name] = msg;
    return value;
  };
}

@logger('class log')
class Foo {
  @logger('calling logger decorator')
  public sayHello(): void {
    console.log('hello');
  }
}

@logger('class log 2')
class Bar {
  @logger('calling logger decorator 2')
  public sayHello2(): void {
    console.log('hello 2');
  }
}

export function json(): string {
  const foo = new Foo();
  foo.sayHello();

  const bar = new Bar();
  bar.sayHello2();

  console.log('####', Foo[Symbol.metadata]);
  console.log('$$$$', Bar[Symbol.metadata]);

  return 'json';
}

json();
