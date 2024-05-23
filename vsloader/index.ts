import { sleep } from "bun";
import { parseConfig } from "./src/ConfigParser";
import * as fs from "fs";
const args = process.argv.slice(2);

const extensionPath = args[0];

console.log(`Loading extension from ${extensionPath}`);

// await parseConfig(extensionPath);

const config = await JSON.parse(fs.readFileSync(extensionPath, "utf8"));

console.log(config);

import { Student } from "./src/Student";

const student = new Student(
	"Student",
	"192.168.0.135",
	"steven",
	"tttttt",
	8000
);

const student2 = new Student(
	"Student",
	"192.168.0.135",
	"second",
	"tttttt",
	8001
);

async function setupStudents(students: Student[]) {
	const promises = students.map((student) => student.setup());
	await Promise.all(promises);
}
async function installCode(students: Student[]) {
	const promises = students.map((student) => student.installCode());
	await Promise.all(promises);
}

async function openVscode(students: Student[]) {
	const promises = students.map((student) => student.openVscode());
	await Promise.all(promises);
}

async function closeVscode(students: Student[]) {
	const promises = students.map((student) => student.closeVscode());
	await Promise.all(promises);
}

async function endConnection(students: Student[]) {
	const promises = students.map((student) => student.endConnection());
	await Promise.all(promises);
}

async function think(students: Student[], time: number) {
	const promises = students.map((student) => student.think(time));
	await Promise.all(promises);
}

async function emulateStudent(students: Student[], config: any) {
	const promises = students.map((student) => student.emulateStudent(config));
	await Promise.all(promises);
}

await setupStudents([student, student2]);

// await student.executeCommand("systemctl stop firewalld.service");

await installCode([student, student2]);

await think([student, student2], 4000);

await openVscode([student, student2]);

await think([student, student2], 5000);

await emulateStudent([student, student2], config);

await closeVscode([student, student2]);

await endConnection([student, student2]);


