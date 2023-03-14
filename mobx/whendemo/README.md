### when
- when(predicate: () => boolean, effect?: () => void, options?)
- when 观察并运行给定的 predicate，直到返回true。 一旦返回 true，给定的 effect 就会被执行，然后 autorunner(自动运行程序) 会被清理。 该函数返回一个清理器以提前取消自动运行程序。