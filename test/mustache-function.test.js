import mustache from "mustache";
import fs from "fs/promises";

test("Function", async () => {
	const paramerter = {
		name: "Rendra",
		funct: () => {
			return (text, render) => {
				return render(text).toUpperCase();
			};
		},
	};
	const func = await fs
		.readFile("./templates/list-object.mustache")
		.then((data) => data.toString());

	const data = mustache.render("Hello {{#funct}}{{name}}{{/funct}}", paramerter);
	console.log(data + " <<<< jadi uppercase");

	expect(data).toEqual("Hello RENDRA");
});
