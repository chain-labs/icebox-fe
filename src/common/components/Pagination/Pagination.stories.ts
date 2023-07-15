import Pagination from '.'

import type { Meta, StoryObj } from '@storybook/react'
import Paginate from '@/common/hooks/usePaginate'
import _ from 'lodash'
import usePaginate from '@/common/hooks/usePaginate'

const meta: Meta<typeof Pagination> = {
    title: 'common/Pagination',
    component: Pagination,
    args: {
        currentPage: 1,
        maxPages: 3,
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Pagination_3_8: Story = {
    const paginate_3_8 = usePaginate(_.)
    args: {
        currentPage: paginate_3_8.currentPage,
        maxPages: paginate_3_8.maxPages,
        next: paginate_3_8.next,
        prev: paginate_3_8.prev,
        jump: paginate_3_8.jump,
    },
}

export const Pagination_first: Story = {
    args: {
        currentPage: 1,
        maxPages: 5,
    },
}

export const Pagination_last: Story = {
    args: {
        currentPage: 10,
        maxPages: 10,
    },
}
