export interface IPageHeader {
	title: string
	tags?: IPageHeaderBreadCrumbs[]
}

interface IPageHeaderBreadCrumbs {
	title: string
	link: string
}
