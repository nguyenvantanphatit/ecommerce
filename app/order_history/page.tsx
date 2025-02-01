"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
export default function UserDashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="p-4 bg-white flex flex-col items-start shadow-md w-64">
        <Link href="/personal-info">
          <div className="mb-2">Personal Info</div>
        </Link>
        <Link href="/wishlist">
          <div className="mb-2">Favorite Products</div>
        </Link>
        <Link href="/order_history">
          <div className="mb-2">Order History</div>
        </Link>
      </div>
      <div className="flex-grow p-8">{<OrderHistory />}</div>
    </div>
  );
}


const OrderHistory = () => {
  const orderStats = [
    { title: "Thành công", value: 10, color: "bg-green-500" },
    { title: "Thất bại", value: 2, color: "bg-red-500" },
    { title: "Hủy", value: 3, color: "bg-yellow-500" },
    { title: "Giao hàng", value: 5, color: "bg-blue-500" },
  ]

  const orderHistory = [
    { id: 1, date: "2023-05-01", total: 500000, status: "Thành công" },
    { id: 2, date: "2023-05-05", total: 750000, status: "Giao hàng" },
    { id: 3, date: "2023-05-10", total: 300000, status: "Hủy" },
    { id: 4, date: "2023-05-15", total: 1000000, status: "Thành công" },
  ]

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {orderStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className={`${stat.color} text-white`}>
              <CardTitle>{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Lịch sử đặt hàng</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Ngày đặt hàng</TableHead>
                <TableHead>Tổng tiền</TableHead>
                <TableHead>Trạng thái</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderHistory.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.total.toLocaleString("vi-VN")} đ</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

