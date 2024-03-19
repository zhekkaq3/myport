
import { GithubIcon, Instagram, Telegram } from "./Icons";
import { CustomLink } from "./customLink";

const navigation = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About me", href: "/about" },
    { id: 3, title: "Contact", href: "/contact" },
];

const socialLink = [
    { id: 1, titleIcon: "Github", href: "https://github.com/zhekkaq3", icon: <GithubIcon /> },
    { id: 2, titleIcon: "Telegram", href: "https://t.me/Zhekkaq3", icon: <Telegram /> },
    { id: 3, titleIcon: "Instagram", href: "https://www.instagram.com/zheniaivanchik/", icon: <Instagram /> },
]




export const NavBar: React.FC = () => {
    return (
        <header className="w-full px-24 py-8 font-medium top-0 left-0 flex items-center justify-between ">
            <nav className="flex items-center justify-center gap-8">
                {navigation.map((item) => (
                    <CustomLink key={item.id} href={item.href} title={item.title}/>
                ))}
            </nav>
            <nav className="flex items-center justify-center gap-8">
                {socialLink.map((item) => (
                    <CustomLink key={item.id} href={item.href} target={'_blank'} span={false}>
                        {item.icon}
                    </CustomLink>
                ))}
            </nav>
        </header>
    )
}