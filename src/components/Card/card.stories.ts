import type { Meta, StoryObj } from '@storybook/react'

import Card from './index'

const meta: Meta<typeof Card> = {
    component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const GreenCard: Story = {
    args: {
        bg: 'green-600',
        title: 'Greenest Card',
        showSub: true,
        imgUrl: 'https://images.unsplash.com/photo-1686836342891-6d1b01101f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
        sub: 'Wondering which is the greenest card?',
    },
}
