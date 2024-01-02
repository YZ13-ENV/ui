import { IconType } from "react-icons/lib"

type CDN_LINK = `https://cdn.darkmaterial.space/${string}`
type DM_FAMILY_PROJECT = `https://${string}.darkmaterial.space` | 'https://darkmaterial.space'

export type Project = {
    key: number | string
    name: string
    link: DM_FAMILY_PROJECT,
    themedIcon: {
        dark: CDN_LINK
        light: CDN_LINK
    }
    icon: CDN_LINK
}

export type Wrapper = {
    type: 'wrapper'
    className?: string
    items: MenuMapProps
}

export type UserSection = {
    type: 'user'
}
export type ProjectsSection = {
    type: 'projects'
    projects: Project[]
}
export type SignOutSection = {
    type: 'sign-out'
    action?: () => Promise<void>
}
export type MemberShipSection = {
    type: 'membership'
    activeState: 'active' | 'inactive'
    state: {
        active: string | JSX.Element
        inactive: string | JSX.Element
    }
}
export type LinksSection = {
    type: 'links'
    title?: string
    items: LinkSectionItem[]
}
type LinkSectionItem = {
    text: string
    link: string
    size?: number
    icon?: IconType
}

export type MenuMapProps = (Wrapper | UserSection | ProjectsSection | SignOutSection | MemberShipSection | LinksSection)[]