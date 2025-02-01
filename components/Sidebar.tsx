import Link from "next/link";
const Sidebar = () => {
  return (
    <>
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
    </>
  );
};

export default Sidebar;
