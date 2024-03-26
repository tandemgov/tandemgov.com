require("dotenv").config();

module.exports = {
    HTTP_HOST: process.env.DEPLOY_URL || "https://tandemgov.com",
    site: "TandemGov",
    tagline: "Good government,<wbr>better partnerships",
    description: "TandemGov helps organizations navigate government contracting while leveraging their strengths.",
    preview_image: "TandemGov-Preview.png",
    social: [{
        name: "LinkedIn",
        slug: "linkedin",
        url: "https://www.linkedin.com/company/tandemgov",
    }, {
        name: "GitHub",
        slug: "github",
        url: "https://github.com/tandemgov",
    }],
    
    services: [{
        "name": "Proposal Support",
        "display": true,
        "icon": "document",
        "items": [
            "Proposal strategy development",
            "Orals/Tech challenge coaching",
            "Color reviews",
            "Technical writing",
            "Solution engineering",
            "Staffing strategy framework",
        ],
        "description": "Our team offers a comprehensive suite of services, from developing proposal strategies and technical writing to conducting thorough reviews and crafting solution engineering. We're equipped to provide coaching for oral presentations and technical challenges, ensuring a well-prepared team and a solid staffing approach.",
    }, {
        "name": "Contract Support",
        "display": true,
        "icon": "building",
        "items": [
            "Contract coaching",
            "Compliance training",
            "Partner identification & analysis",
        ],
        "description": "Our services are tailored to streamline contract management, encompassing contract coaching, compliance training, and partner identification and analysis. This integrated approach is crafted to enhance efficiency in handling contracts and to foster strategic partnerships, ensuring successful outcomes.",
    }, {
        "name": "Opportunity Analysis",
        "display": true,
        "icon": "search-document",
        "items": [
            "Custom data analytics & research",
            "Partner identification",
            "Teaming strategies",
            "Introduction assistance* (mutual opt-in?)",
            "Acquisition strategy training",
        ],
        "description": "Our team specializes in custom data analytics and research, identifying potential opportunities and partners. We focus on developing teaming strategies and acquisition training, and assist in facilitating well-matched introductions. This approach is aimed at effectively pinpointing and securing valuable opportunities.",
    }, {
        "name": "Capture Management",
        "display": true,
        "icon": "chess",
        "items": [
            "Landscape analysis",
            "Past performance study",
            "Strategic review?",
            "Solutions engineering",
            "Demo/Pitch support",
            "Case study development",
            "Artifact curation & creation",
        ],
        "description": "Our expertise includes landscape analysis, past performance evaluation, strategic reviews, and custom solutions engineering. We aid in preparing demos and pitches, developing case studies, and managing artifacts, all aimed at crafting a strong, effective bid strategy.",
    }, {
        "name": "Business Development",
        "display": true,
        "icon": "rising-graph",
        "items": [
            "Process analysis & optimization",
            "Tool development & documentation",
            "Infrastructure analysis",
            "Automation (development?)",
            "Reporting (consultation, development, other?)",
            "Artifact curation",
        ],
        "description": "We streamline sales processes with custom AI-driven tools for pipeline development, complemented by targeted process analysis, automation, and infrastructure insights. Our focused approach aims to enhance your sales strategy's efficiency and effectiveness.",
    }, {
        "name": "Thought Leadership",
        "icon": "cognition",
        "display": true,
        "items": [
            "Whitepaper assistance",
            "Blog post development",
        ],
        "description": "We offer support in producing whitepapers and thought leadership pieces, aiming to enhance the visibility of government vendors among important industry contacts. This is part of our broader effort to assist clients in establishing themselves as informed voices in their sector.",
    }],
};
