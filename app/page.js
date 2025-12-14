"use client";


import { AboutSection, ProjectSection, TechnologiesSection, WelcomeSection, Certification } from "../app/sections";

export default function Page() {
	return (
		<main className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ProjectSection />
			<Certification />
			<TechnologiesSection />
		</main>
	);
}
