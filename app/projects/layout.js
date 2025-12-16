"use client";

// import { HeadingDivider, Loader } from "./components";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import Error from "../error";
import { Filter } from "./components/Filter";
// import { Projects } from "../projects";

export default function Page() {
	const [category, setCategory] = useState(undefined);
	const filterUrl = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_PROJECTS}${category}${process.env.NEXT_PUBLIC_SANITY_PROJECT_BY_CATEGORY}`;
	
	// FIX: Define default URL for all projects
	const defaultUrl = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_PROJECTS}`;
	
	// FIX: Use defaultUrl instead of undefined url
	const fetchUrl = category ? filterUrl : defaultUrl;
	
	const { data, error } = useSWR(fetchUrl, fetcher);
	const filteredProjects = data?.result;

	const onClick = (catName) => setCategory(catName);

	if (error) {
		return <div className="container-md">Error loading projects...</div>;
	}

	return (
		<div className="container-md">
			<section id="projects" className="section">
				{/* Make sure HeadingDivider is imported or defined */}
				{/* <HeadingDivider title="Relevant projects" /> */}

				<Filter onClick={onClick} />

				<Suspense
					fallback={
						<div className="flex-center">
							{/* Make sure Loader is imported or defined */}
							{/* <Loader /> */}
							<span>Loading...</span>
						</div>
					}
				>
					<ErrorBoundary FallbackComponent={Error}>
						{filteredProjects === undefined ? (
							// Loading state
							<div className="flex-center">
								{/* <Loader /> */}
								<span>Loading projects...</span>
							</div>
						) : filteredProjects.length === 0 ? (
							// Empty state
							<div className="flex-center">
								<h3 className="text-2xl">No projects found in {category} category</h3>
							</div>
						) : (
					
							<div>Projects would render here</div>
						)}
					</ErrorBoundary>
				</Suspense>
			</section>
		</div>
	);
}