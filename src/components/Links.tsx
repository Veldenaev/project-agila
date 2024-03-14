import { useRouter } from "next/router";

export default function Links() {
  const router = useRouter();
  const pages = [
    {
      name: "Landing",
      route: "/",
    },
    // Sprint 1
    //    {
    //      name: "Login",
    //      route: "/login",
    //    },
    //    {
    //      name: "Dashboard",
    //      route: "/dashboard",
    //    },
    //    {
    //      name: "Transaction management",
    //      route: "/transaction_management",
    //    },
    //    {
    //      name: "Notification management",
    //      route: "/notification_management",
    //    },
    // Sprint 2a
    //    {
    //      name: "Dashboard - Admin",
    //      route: "/dashboard_admin",
    //    },
    //    {
    //      name: "Dashboard - Lawyer",
    //      route: "/dashboard_lawyer",
    //    },
    //    {
    //      name: "Dashboard - Client",
    //      route: "/dashboard_client",
    //    },
    //    {
    //      name: "Account Management",
    //      route: "/account_management",
    //    },
    //    {
    //      name: "Case Management",
    //      route: "/case_management",
    //    },
    {
      name: "Accounts (L)",
      route: "/accounts/0",
    },
    {
      name: "Cases (L)",
      route: "/cases/l_0",
    },
    {
      name: "Accounts (M)",
      route: "/accounts/1",
    },
    {
      name: "Cases (M)",
      route: "/cases/l_1",
    },
    {
      name: "Cases (C)",
      route: "/cases/c_0",
    },
    {
      name: "Case Overview",
      route: "/overviews/0",
    },
    //     {
    //       name: "Billing",
    //       route: "/billings/0",
    //     },
  ];
  const pagesJsx = pages.map(({ name, route }, index) => (
    <a
      key={index}
      href={route}
      className={`z-10 flex h-full w-full items-center justify-center hover:bg-violet-500/80 ${router.asPath === route ? "bg-violet-500/80" : "bg-violet-500"}`}
    >
      <div>{name} page</div>
    </a>
  ));

  return (
    <div className="flex h-10 w-full flex-row items-center text-center text-white">
      {pagesJsx}
    </div>
  );
}
