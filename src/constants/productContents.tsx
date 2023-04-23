import type { ProductCardWithModalProps } from "@/components/modules/ProductCardWithModal"

export const productContents: Array<ProductCardWithModalProps> = [
    {
        image: "/penguin.jpeg",
        title: "お家Bar",
        application_description: "サークルの仲間と一緒に制作したWebアプリケーションです。\
                                カクテルを作ってみたいという人向けに、カクテル作りの敷居を下げるために作成しました。\
                                今持っているお酒を登録すると、登録されているお酒をもとに、おすすめのカクテルを教えてくれます。\
                                登録しやすくするためにカメラでバーコードを読み取って登録することもできます。\
                                お家Bar制作でフロントエンド実装を経験しました。",
        skills_description: "Ruby on Rails, React, TypeScript, ...",
    },
    {
        image: "/penguin.jpeg",
        title: "Portfolio",
        application_description: "今みているこのWebページです。サークル内でポートフォリオ作成ハッカソンを使用という話があり、\
                                そのハッカソンでこのポートフォリオサイトを制作しました。データベース等は用いないので、\
                                HTML/CSS, JavaScriptでもいいかなと悩みましたが、せっかくReactを学習してきたので、React(Next), TypeScriptで制作しました",
        skills_description: "React(Next), TypeScript, ChartJS, ...",
    },
    {
        image: "/penguin.jpeg",
        title: "this is title",
        application_description: "this is description",
        skills_description: "this is skill description",
    },
    {
        image: "/penguin.jpeg",
        title: "this is title",
        application_description: "this is description",
        skills_description: "this is skill description",
    }
]