import { auth } from "../auth";
import {
  Package,
  RefreshCw,
  Truck,
  CreditCard,
  HelpCircle,
  BarChart4,
  Printer,
  Calendar,
  MessageSquare,
} from "lucide-react";

import LoginButton from "../components/Header/LoginButton";

const returnOptions = [
  {
    icon: Package,
    title: "Return an Item",
    description: "Start a return for items ordered in the last 30 days",
  },
  {
    icon: RefreshCw,
    title: "Exchange an Item",
    description: "Exchange for a different size, color, or item",
  },
  {
    icon: Truck,
    title: "Return Status",
    description: "Track the progress of your return or refund",
  },
  {
    icon: CreditCard,
    title: "Refund Status",
    description: "Check when you'll receive your refund",
  },
  {
    icon: BarChart4,
    title: "Return History",
    description: "View all your past returns and refunds",
  },
  {
    icon: Printer,
    title: "Print Label",
    description: "Print a return shipping label",
  },
  {
    icon: Calendar,
    title: "Return Window",
    description: "Check return eligibility for your orders",
  },
  {
    icon: HelpCircle,
    title: "Return Help",
    description: "Get answers to common return questions",
  },
  {
    icon: MessageSquare,
    title: "Contact Support",
    description: "Need more help? Contact our support team",
  },
];
export default async function Returns() {
  const session = await auth();
  if (!session)
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-lg font-bold uppercase p-12">
        To view Returns & Orders, please login.
        <div className="lg:w-1/4 w-full">
          <LoginButton />
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-12">
      {returnOptions.map((option, index) => (
        <div
          key={index}
          className="bg-white p-4 border border-gray-200 hover:border-gray-300 transition-colors duration-200 cursor-pointer"
        >
          <div className="flex items-start">
            <div className="mr-3">
              <option.icon className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium text-amazon-blue hover:text-amazon-orange hover:underline transition-colors duration-200">
                {option.title}
              </h3>
              <p className="text-gray-700 text-sm mt-1">{option.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
