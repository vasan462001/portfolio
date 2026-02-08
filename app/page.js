"use client";


import { AboutSection, ProjectSection, TechnologiesSection, WelcomeSection, Certification, EducationSection } from "../app/sections";

export default function Page() {
	return (
		<main className="container-md">
			<WelcomeSection />
			<AboutSection />
			<EducationSection />
			<ProjectSection />
			<Certification />

			<TechnologiesSection />
		</main>
	);
}
