import React, { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown, ChevronsUpDown, Loader2 } from 'lucide-react';

export interface Column<T> {
  header: string;
  accessor: keyof T;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  emptyMessage?: string;
  className?: string;
}

type SortDirection = 'asc' | 'desc' | null;

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  emptyMessage = 'No data available',
  className,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue === bValue) return 0;

      let comparison = 0;
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        comparison = aValue - bValue;
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [data, sortColumn, sortDirection]);

  const handleSort = (column: keyof T) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection(null);
        setSortColumn(null);
      } else {
        setSortDirection('asc');
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleRowSelect = (index: number) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(index)) {
      newSelectedRows.delete(index);
    } else {
      newSelectedRows.add(index);
    }
    setSelectedRows(newSelectedRows);
    
    const selectedData = Array.from(newSelectedRows).map(i => sortedData[i]);
    onRowSelect?.(selectedData);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === sortedData.length) {
      setSelectedRows(new Set());
      onRowSelect?.([]);
    } else {
      const allRows = new Set(Array.from({ length: sortedData.length }, (_, i) => i));
      setSelectedRows(allRows);
      onRowSelect?.(sortedData);
    }
  };

  const getSortIcon = (column: keyof T) => {
    if (sortColumn !== column) {
      return <ChevronsUpDown className="w-4 h-4" />;
    }
    if (sortDirection === 'asc') {
      return <ChevronUp className="w-4 h-4" />;
    }
    if (sortDirection === 'desc') {
      return <ChevronDown className="w-4 h-4" />;
    }
    return <ChevronsUpDown className="w-4 h-4" />;
  };

  if (loading) {
    return (
      <div className={cn('w-full', className)}>
        <div className="bg-card border border-border rounded-lg">
          <div className="p-8 text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">Loading data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className={cn('w-full', className)}>
        <div className="bg-card border border-border rounded-lg">
          <div className="p-8 text-center">
            <p className="text-muted-foreground">{emptyMessage}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full" data-testid="data-table">
            <thead className="bg-muted/50">
              <tr>
                {selectable && (
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedRows.size === sortedData.length && sortedData.length > 0}
                      onChange={handleSelectAll}
                      className="rounded border-border text-primary focus:ring-ring"
                      data-testid="select-all-checkbox"
                    />
                  </th>
                )}
                {columns.map((column) => (
                  <th
                    key={String(column.accessor)}
                    className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                  >
                    {column.sortable ? (
                      <button
                        onClick={() => handleSort(column.accessor)}
                        className="flex items-center space-x-1 hover:text-foreground transition-colors"
                        data-testid={`sort-${String(column.accessor)}`}
                      >
                        <span>{column.header}</span>
                        {getSortIcon(column.accessor)}
                      </button>
                    ) : (
                      column.header
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {sortedData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/25 transition-colors"
                  data-testid={`table-row-${index}`}
                >
                  {selectable && (
                    <td className="px-4 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(index)}
                        onChange={() => handleRowSelect(index)}
                        className="rounded border-border text-primary focus:ring-ring"
                        data-testid={`select-row-${index}`}
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={String(column.accessor)}
                      className="px-4 py-4 whitespace-nowrap text-sm text-foreground"
                      data-testid={`cell-${String(column.accessor)}-${index}`}
                    >
                      {column.render
                        ? column.render(row[column.accessor], row)
                        : String(row[column.accessor])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
