import React from 'react'

type Props = {
    className?: string
    children: React.ReactNode
}

export default function Main(props: Props) {
    return (
        <main className={`min-h-screen 2xl:min-h-max ${props.className}`}>
            {props.children}
        </main>
    )
}
