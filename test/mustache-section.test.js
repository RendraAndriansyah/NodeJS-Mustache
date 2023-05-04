import mustache from "mustache";
import fs from "fs/promises";

test("Mustache section not show", async () => {
	const helloPerson = await fs
		.readFile("./templates/person.mustache")
		.then((person) => person.toString());
	const data = mustache.render(helloPerson, {});
	console.log(data);
	expect(data).not.toContain("Hello Rendra");
});

test("Mustache section show", async () => {
	const helloPerson = await fs
		.readFile("./templates/person.mustache")
		.then((data) => data.toString());
	const data = mustache.render(helloPerson, {
		person: "Rendra",
	});
	console.log(data);
	expect(data).toContain("hello User");
});
