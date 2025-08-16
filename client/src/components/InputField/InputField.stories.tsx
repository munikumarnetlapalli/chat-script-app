import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible and reusable input field component with multiple variants, sizes, and states for building consistent form interfaces.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'ghost'],
      description: 'Visual style variant of the input field',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable input interaction',
    },
    invalid: {
      control: 'boolean',
      description: 'Show error state',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state with spinner',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input type',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    helperText: "We'll never share your email with anyone else.",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <InputField
        variant="outlined"
        label="Outlined"
        placeholder="Outlined input"
      />
      <InputField
        variant="filled"
        label="Filled"
        placeholder="Filled input"
      />
      <InputField
        variant="ghost"
        label="Ghost"
        placeholder="Ghost input"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField
        size="sm"
        label="Small"
        placeholder="Small input"
      />
      <InputField
        size="md"
        label="Medium"
        placeholder="Medium input"
      />
      <InputField
        size="lg"
        label="Large"
        placeholder="Large input"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <InputField
        label="Error State"
        placeholder="Enter your email"
        invalid
        errorMessage="Please enter a valid email address"
      />
      <InputField
        label="Disabled State"
        placeholder="Disabled input"
        disabled
        helperText="This field is disabled"
      />
      <InputField
        label="Loading State"
        placeholder="Loading..."
        loading
      />
      <InputField
        label="Success State"
        value="john@example.com"
        helperText="Email is valid"
      />
    </div>
  ),
};

export const WithClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    clearable: true,
    value: 'sample text',
  },
};

export const PasswordField: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
    value: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'Cannot edit this',
    disabled: true,
    helperText: 'This field is read-only',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Field',
    placeholder: 'Please wait...',
    loading: true,
  },
};

export const DarkTheme: Story = {
  args: {
    label: 'Dark Theme Example',
    placeholder: 'Enter text...',
    helperText: 'This shows how the component looks in dark mode',
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
