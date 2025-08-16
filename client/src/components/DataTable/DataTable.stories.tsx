import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive' | 'Pending';
  avatar?: string;
}

const sampleUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
  { id: 2, name: 'Alice Smith', email: 'alice@example.com', role: 'Designer', status: 'Pending' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
  { id: 4, name: 'Carol Williams', email: 'carol@example.com', role: 'Developer', status: 'Active' },
  { id: 5, name: 'David Brown', email: 'david@example.com', role: 'QA Engineer', status: 'Active' },
];

const userColumns = [
  {
    header: 'Name',
    accessor: 'name' as keyof User,
    sortable: true,
    render: (value: any, row: User) => (
      <div className="flex items-center">
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
          <span className="text-primary font-medium text-sm">
            {row.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <span className="font-medium">{value}</span>
      </div>
    ),
  },
  {
    header: 'Email',
    accessor: 'email' as keyof User,
    sortable: true,
  },
  {
    header: 'Role',
    accessor: 'role' as keyof User,
    sortable: true,
  },
  {
    header: 'Status',
    accessor: 'status' as keyof User,
    sortable: true,
    render: (value: any) => {
      const statusColors = {
        Active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
        Inactive: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      };
      return (
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[value as keyof typeof statusColors]}`}>
          {value}
        </span>
      );
    },
  },
];

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible and feature-rich data table component with sorting, selection, loading states, and responsive design.',
      },
    },
  },
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Show loading state with spinner',
    },
    selectable: {
      control: 'boolean',
      description: 'Enable row selection with checkboxes',
    },
    emptyMessage: {
      control: 'text',
      description: 'Message to display when no data is available',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
};

export const WithSelection: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
    onRowSelect: (selectedRows) => {
      console.log('Selected rows:', selectedRows);
    },
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: userColumns,
    loading: true,
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns: userColumns,
    emptyMessage: 'No users found. Try adjusting your search criteria.',
  },
};

export const Sorted: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on sortable column headers to sort the data. You can sort in ascending, descending, or return to original order.',
      },
    },
  },
};

export const SimpleColumns: Story = {
  args: {
    data: sampleUsers,
    columns: [
      { header: 'Name', accessor: 'name', sortable: true },
      { header: 'Email', accessor: 'email', sortable: true },
      { header: 'Role', accessor: 'role', sortable: true },
    ],
  },
};

export const ResponsiveExample: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'The table is responsive and will scroll horizontally on smaller screens while maintaining usability.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Developer', 'Designer', 'Manager', 'QA Engineer'][i % 4],
      status: (['Active', 'Inactive', 'Pending'] as const)[i % 3],
    })),
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with a larger dataset to demonstrate performance and scrolling behavior.',
      },
    },
  },
};
