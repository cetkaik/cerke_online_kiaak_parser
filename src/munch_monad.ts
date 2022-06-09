export type Munch<T> = (input: string) => ({ ans: T, rest: string } | null);

// monad
export const bind: <A, B> (ma: Munch<A>, callback: ((a: A) => Munch<B>)) => Munch<B> = (ma, callback) => ((input: string) => {
	const res1 = ma(input);
	if (res1 === null) return null;
	const { ans: a, rest } = res1;
	return callback(a)(rest);
});
export const pure: <A> (a: A) => Munch<A> = (a) => (input: string) => ({ ans: a, rest: input });

export const liftM2: <A, B, C> (f: (a: A, b: B) => C, ma: Munch<A>, mb: Munch<B>) => Munch<C> = (f, ma, mb) =>
	bind(ma, a => bind(mb, b => pure(f(a, b))));


export const liftM3: <A, B, C, D> (f: (a: A, b: B, c: C) => D, ma: Munch<A>, mb: Munch<B>, mc: Munch<C>) => Munch<D> = (f, ma, mb, mc) =>
	bind(ma, a => bind(mb, b => bind(mc, c => pure(f(a, b, c)))));
