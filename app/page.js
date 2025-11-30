"use client";


import { AboutSection, ProjectsSection, TechnologiesSection, WelcomeSection,Certification } from "../app/sections";

export default function Page() {
	return (
		<main className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<Certification/>
			<TechnologiesSection />
		</main>
	);
}
