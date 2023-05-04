test("test toBe ", () => {
	const name = "Rendra";
	const hello = `hello ${name}`;
	expect(hello).toBe("hello Rendra");
});

test("test toBe ", () => {
	const name = {
		id: 1,
		name: "Rendra",
	};
	expect(name.id).toBe(1);
});

test("test toEqual ", () => {
	const name = {
		id: 1,
		name: "Rendra",
	};
	expect(name.name).toEqual("Rendra");
});
