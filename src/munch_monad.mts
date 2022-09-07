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
	bind(ma, a =>
		bind(mb, b =>
			pure(f(a, b))
		)
	);

export const string: (prefix: string) => Munch<undefined> =
	(prefix) => (input) => input.startsWith(prefix) ? { ans: undefined, rest: input.slice(prefix.length) } : null;

export const liftM3: <A, B, C, D> (f: (a: A, b: B, c: C) => D, ma: Munch<A>, mb: Munch<B>, mc: Munch<C>) => Munch<D> = (f, ma, mb, mc) =>
	bind(ma, a =>
		bind(mb, b =>
			bind(mc, c =>
				pure(f(a, b, c))
			)
		)
	);

export const many: <A>(ma: Munch<A>) => Munch<A[]> = <A,>(ma: Munch<A>) => input => {
	const ans: A[] = [];
	let rest = input;
	while (true) {
		const res1 = ma(rest);
		if (res1 === null) return { ans, rest };
		const { ans: a, rest: r } = res1;
		ans.push(a);
		rest = r;
	}
};

export const many1: <A>(ma: Munch<A>) => Munch<A[]> = <A,>(ma: Munch<A>) => input => {	
	const res1 = ma(input);
	if (res1 === null) return null;
	let { ans: a, rest } = res1;
	const ans: A[] = [a];
	while (true) {
		const res1 = ma(rest);
		if (res1 === null) return { ans, rest };
		const { ans: a, rest: r } = res1;
		ans.push(a);
		rest = r;
	}
};

export const sepBy1: <A, Sep>(o: { p: Munch<A>, sep: Munch<Sep> }) => Munch<A[]> = ({ p: ma, sep }) =>
	bind(ma, a =>
		bind(many(bind(sep, (_) => ma)), as =>
			pure([a, ...as])
		)
	);