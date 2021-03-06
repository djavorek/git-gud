import React from 'react';

import Graph from "../Graph";


class GitFlowGph extends React.Component {

	gitflow(git) {
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
		
	}

	render() {
		return (
			<div>
				<Graph graph={this.gitflow}/>
			</div>
		);
	}
}

export default GitFlowGph;