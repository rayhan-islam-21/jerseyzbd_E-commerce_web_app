"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import api from "@/lib/axios";
import { TbCurrencyTaka } from "react-icons/tb";
import { Spinner } from "../ui/spinner";

//edit and delete function
function handleEdit(item) {
 
}

function handleDelete(item) {

}

// --------------------------
// Columns Definition
// --------------------------
const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    header: "Product",
    accessorKey: "product",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="rounded">
          <AvatarImage
            className="object-center  object-cover"
            src={row.original.productImage}
            alt={row.original.fallback}
          />
          <AvatarFallback className="text-xs ">
            {row.original.fallback}
          </AvatarFallback>
        </Avatar>
        <div className={row.getIsSelected() ? "text-black" : "text-white/80"}>
          {row.getValue("product")}
        </div>
      </div>
    ),
  },
  {
    header: "Price",
    accessorKey: "price",
    cell: ({ row }) => (
      <div
        className={
          row.getIsSelected()
            ? "text-black flex items-center"
            : "text-white/80 flex items-center"
        }
      >
        <TbCurrencyTaka />
        {row.getValue("price")}
      </div>
    ),
    enableSorting: false,
    meta: {
      filterVariant: "range",
    },
  },
  {
    header: "Stock",
    accessorKey: "availability",
    cell: ({ row }) => {
      const availability = row.getValue("availability");

      const styles = {
        "In Stock":
          "bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5",
        "Out of Stock":
          "bg-destructive/10 [a&]:hover:bg-destructive/5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive",
        Limited:
          "bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5",
      }[availability];

      return (
        <Badge className={cn("border-none focus-visible:outline-none", styles)}>
          {availability}
        </Badge>
      );
    },
    enableSorting: false,
    meta: {
      filterVariant: "select",
    },
  },
  {
    header: "Category",
    accessorKey: "category",
    cell: ({ row }) => (
      <div className={row.getIsSelected() ? "text-black" : "text-white/80"}>
        {row.getValue("category")}
      </div>
    ),
    meta: {
      filterVariant: "select",
    },
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          variant="default"
          className="flex items-center justify-center w-9 h-9 p-0 text-white bg-green-600 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all transform hover:scale-110"
          onClick={() => handleEdit(row.original)}
          title="Edit"
        >
          <FaRegPenToSquare size={16} />
        </Button>

        <Button
          variant="default"
          className="flex items-center justify-center w-9 h-9 p-0 text-white bg-red-600 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition-all transform hover:scale-110"
          onClick={() => handleDelete(row.original)}
          title="Delete"
        >
          <FaRegTrashAlt size={16} />
        </Button>
      </div>
    ),
  },
];

// --------------------------
// Main Component
// --------------------------
export default function ProductTable() {
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([{ id: "price", desc: false }]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api.get("/product");
        const mappedData = res.data.map((item) => ({
          id: item._id,
          product: item.productName,
          productImage: item.image,
          availability: item.productStock > 0 ? "In Stock" : "Out of Stock",
          price: item.discountPrice,
          category: item.productCategory,
          fallback: item.productName.slice(0, 2).toUpperCase(),
        }));

        setData(mappedData);
      } catch (error) {
        console.error(error);
      }finally {
      setLoading(false); // stop loader
    }
    };

    fetchData();
  }, []);

  const table = useReactTable({
    data: data,
    columns,
    state: { sorting, columnFilters },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    enableSortingRemoval: false,
  });

  return (
    <div className="w-full">
      {loading ? (
        <Button disabled size="sm">
          <Spinner />
          Loading...
        </Button>
      ) : (
        <div className="rounded-md border border-gray-700/80 p-6">
          <div className="flex flex-wrap gap-3 px-2 py-6">
            <div className="w-44">
              <Filter column={table.getColumn("product")} />
            </div>
            <div className="w-36">
              <Filter column={table.getColumn("price")} />
            </div>
            <div className="w-44">
              <Filter column={table.getColumn("availability")} />
            </div>
            <div className="w-36">
              <Filter column={table.getColumn("category")} />
            </div>
          </div>

          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="relative h-10 border-t border-t-gray-400 text-white select-none"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

// --------------------------
// Filter Component
// --------------------------
function Filter({ column }) {
  const id = useId();
  const columnFilterValue = column?.getFilterValue();
  const filterVariant = column?.columnDef?.meta?.filterVariant;
  const columnHeader =
    typeof column?.columnDef?.header === "string"
      ? column.columnDef.header
      : "";

  const sortedUniqueValues = useMemo(() => {
    if (filterVariant === "range") return [];

    const values = Array.from(column.getFacetedUniqueValues().keys());
    const flattened = values.reduce((acc, curr) => acc.concat(curr), []);
    return Array.from(new Set(flattened)).sort();
  }, [column, filterVariant]);

  if (filterVariant === "range") {
    return (
      <div className="*:not-first:mt-2  text-white">
        <Label>{columnHeader}</Label>
        <div className="flex">
          <Input
            id={`${id}-range-1`}
            className="flex-1 rounded-r-none text-white"
            value={columnFilterValue?.[0] ?? ""}
            onChange={(e) =>
              column.setFilterValue([
                e.target.value ? Number(e.target.value) : undefined,
                columnFilterValue?.[1],
              ])
            }
            placeholder="Min"
            type="number"
          />
          <Input
            id={`${id}-range-2`}
            className="-ms-px flex-1 rounded-l-none text-white"
            value={columnFilterValue?.[1] ?? ""}
            onChange={(e) =>
              column.setFilterValue([
                columnFilterValue?.[0],
                e.target.value ? Number(e.target.value) : undefined,
              ])
            }
            placeholder="Max"
            type="number"
          />
        </div>
      </div>
    );
  }

  if (filterVariant === "select") {
    return (
      <div className="*:not-first:mt-2  text-white">
        <Label htmlFor={`${id}-select`}>{columnHeader}</Label>
        <Select
          value={columnFilterValue?.toString() ?? "all"}
          onValueChange={(value) =>
            column.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger id={`${id}-select`} className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {sortedUniqueValues.map((value) => (
              <SelectItem key={String(value)} value={String(value)}>
                {String(value)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  return (
    <div className="*:not-first:mt-2 text-white">
      <Label htmlFor={`${id}-input`}>{columnHeader}</Label>
      <div className="relative">
        <Input
          id={`${id}-input`}
          className="peer pl-9 text-white"
          value={columnFilterValue ?? ""}
          onChange={(e) => column.setFilterValue(e.target.value)}
          placeholder={`Search ${columnHeader.toLowerCase()}`}
          type="text"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3">
          <SearchIcon size={16} />
        </div>
      </div>
    </div>
  );
}
