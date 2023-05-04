import mustache from "mustache";
import fs from "fs/promises";

test("Mustache list object", async () => {
	const listObject = await fs
		.readFile("./templates/list-object.mustache")
		.then((data) => data.toString());

	const data = mustache.render(listObject, {
		student: [
			{ value: 100, name: "Rendra" },
			{ value: 110, name: "Andriansyah" },
			{ value: 120, name: "Evita" },
			{ value: 130, name: "Sari" },
		],
	});

	console.log(data);
	expect(data).toContain("Rendra");
	expect(data).toContain("Andriansyah");
	expect(data).toContain("Evita");
	expect(data).toContain("Sari");
});
