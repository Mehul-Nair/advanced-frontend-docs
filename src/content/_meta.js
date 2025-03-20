import { Sidebar } from "lucide-react";

export default {
    index: {
        title: 'Home',
        display: 'hidden',
        type: 'page',
        theme: {
            breadcrumb: false,
            typesetting: "article",
            layout: 'full',
            sidebar: false,
            toc: false
        }
    },
    docs: {
        title: 'Documentation',
        type: 'page'
    },
    demos: {
        title: 'Demos',
        type: 'page'
    },
}