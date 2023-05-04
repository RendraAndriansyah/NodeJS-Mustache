import mustache from "mustache";
import fs from "fs/promises";

test("Mustache inverted section", async () => {
	const helloPerson = await fs
		.readFile("./templates/person.mustache")
		.then((person) => person.toString());
	const data = mustache.render(helloPerson, {});
	console.log(data);
	expect(data).toContain("hello Guest");
});

test("Mustache section show", async () => {
	const helloPerson = await fs
		.readFile("./templates/person.mustache")
		.then((data) => data.toString());
	const data = mustache.render(helloPerson, {
		person: {
			name: "Rendra",
		},
	});
	console.log(data);
	expect(data).toContain("hello Rendra");
});
