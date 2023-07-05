import TableItem from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TableItem> = {
    title: 'Collections/Table/TableItem',
    component: TableItem,
    args: {
        slug: 'smiley-cones',
        name: 'Smiley Cones',
        inscriptions: {
            max: 383467,
            min: 329826,
        },
        image_url:
            'https://bis-ord-content.fra1.cdn.digitaloceanspaces.com/ordinals/67f1a7ccb6491ae3f9d799501f0a8e41c51ff36b4bf3a83938a06237f3bc6bb1i0',
        floor_price: 99984,
        top_loan_offer: null,
        loan_volume_7d: {
            value: 25155.25,
            change: 24.63,
        },
        sales_volume_7d: {
            value: 12566.05,
            change: -16.9,
        },
        buy_links: {
            ship: true,
            gem: true,
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
}

export default meta

type Story = StoryObj<typeof TableItem>

export const DefaultTableHeader: Story = {
    args: {
        slug: 'smiley-cones',
        name: 'Smiley Cones',
        inscriptions: {
            max: 383467,
            min: 329826,
        },
        image_url:
            'https://bis-ord-content.fra1.cdn.digitaloceanspaces.com/ordinals/67f1a7ccb6491ae3f9d799501f0a8e41c51ff36b4bf3a83938a06237f3bc6bb1i0',
        floor_price: 99984,
        top_loan_offer: null,
        loan_volume_7d: {
            value: 25155.25,
            change: 24.63,
        },
        sales_volume_7d: {
            value: 12566.05,
            change: -16.9,
        },
        buy_links: {
            ship: true,
            gem: true,
        },
    },
}
