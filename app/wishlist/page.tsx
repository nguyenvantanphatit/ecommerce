"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="flex-grow p-8">{<FavoriteProducts />}</div>
    </div>
  );
}

const FavoriteProducts = () => {
  const favoriteProducts = [
    { id: 1, name: "Sản phẩm A", price: 100000 },
    { id: 2, name: "Sản phẩm B", price: 200000 },
    { id: 3, name: "Sản phẩm C", price: 300000 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách sản phẩm yêu thích</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {favoriteProducts.map((product) => (
            <li key={product.id} className="mb-2">
              {product.name} - {product.price.toLocaleString("vi-VN")} đ
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
