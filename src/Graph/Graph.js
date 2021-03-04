import './Graph.css';

import { Gitgraph as GitGraph } from "@gitgraph/react";

const options = {
	orientation: "horizontal-reverse",
	mode: "compact"
}

function Graph() {
	return (
		<div>
			<GitGraph options={options}>{(git) => {
				const master = git.branch("master");
				master.commit("Init the project");
				master
				.commit("Add README")
				.commit("Add tests")
				.commit("Implement feature");
				master.tag("v1.0");
				const newFeature = git.branch("new-feature");
				newFeature.commit("Implement an awesome feature");
				master.commit("Hotfix a bug");
				newFeature.commit("Fix tests");
				// Merge `newFeature` into `master`
				master.merge(newFeature, "Release new version");
				
			}}
		</GitGraph>
	</div>
	);
}

export default Graph;