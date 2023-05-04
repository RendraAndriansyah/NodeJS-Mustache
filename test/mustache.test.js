import Mustache from "mustache";

test("Menggunakan Mustache", () => {
	const data = Mustache.render("Hello {{name}}", { name: "Rendra" });
	expect(data).toBe("Hello Rendra");
});

test("Menggunakan Mustache cache", () => {
	Mustache.parse("hello {{name}}");

	const data = Mustache.render("Hello {{name}}", { name: "Rendra" });
	expect(data).toBe("Hello Rendra");
});
