import mustache from "mustache";
import fs from "fs/promises";
import exp from "constants";

test("mustache section list", async () => {
	const helloList = await fs
		.readFile("./templates/list.mustache")
		.then((data) => data.toString());

	const data = mustache.render(helloList, {
		hobbies: ["Hiking", "Gaming", "Programming"],
	});

	console.log(data);

	expect(data).toContain("Hiking");
	expect(data).toContain("Gaming");
	expect(data).toContain("Programming");
});
