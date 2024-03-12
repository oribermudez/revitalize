import { useState, useEffect } from "react";
import {
  UsersIcon,
  ClipboardDocumentListIcon,
  ArchiveBoxXMarkIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

export function CardData() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/appointments");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const appointments = await response.json();

        // Calculate metrics based on fetched data
        const sales = await calculateSales(); // Call calculateSales function
        const totalAppointments = await monthAppointmentsCount(); // Call appointmentsCount function

        setCardData([
          {
            title: "Frequent Clients",
            value: 250,
            monthlyGoal: 65,
            backgroundColor: "main",
            icon: UsersIcon,
          },
          {
            title: "Total Appointments",
            value: totalAppointments,
            monthlyGoal: 44,
            backgroundColor: "secondary",
            icon: ClipboardDocumentListIcon,
          },
          {
            title: "Cancellations",
            value: 3,
            monthlyGoal: 10,
            backgroundColor: "accent",
            icon: ArchiveBoxXMarkIcon,
          },
          {
            title: "Sales",
            value: sales,
            monthlyGoal: 30,
            backgroundColor: "secondary",
            icon: BanknotesIcon,
          },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  async function calculateSales() {
    try {
      const response = await fetch("/api/invoices");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const invoices = await response.json();

      // Calculate the total sales for the current month
      const totalSales = invoices.reduce((total, invoice) => {
        return total + invoice.totalCost;
      }, 0);
      return totalSales;
    } catch (error) {
      console.error("Error calculating sales:", error);
      return 0;
    }
  }

  return cardData;
}

// Export calculateSales function for use in other components
// Define a function to calculate sales for the current month
export async function calculateSalesForCurrentMonth() {
  try {
    // Get the current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 to get the month in the range 1-12
    const currentYear = currentDate.getFullYear();

    //console.log("Current month:", currentMonth);

    // Fetch the invoices data
    const response = await fetch("/api/invoices");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const invoices = await response.json();
    //console.log("All invoices:", invoices);

    // Filter invoices for the current month and year
    const filteredInvoices = invoices.filter((invoice) => {
      const transactionDate = new Date(invoice.transactionDate);
      //console.log("Transaction date:", transactionDate);
      return (
        transactionDate.getMonth() === currentMonth - 1 && // JavaScript months are zero-based
        transactionDate.getFullYear() === currentYear
      );
    });
    //console.log("Filtered invoices:", filteredInvoices);

    // Calculate the total sales for the filtered invoices
    const totalSales = filteredInvoices.reduce((total, invoice) => {
      return total + invoice.totalCost;
    }, 0);

    return totalSales;
  } catch (error) {
    console.error("Error calculating sales:", error);
    return 0;
  }
}

//Total number of appointments for the current month
export async function monthAppointmentsCount() {
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 to get the month in the range 1-12
    const currentYear = currentDate.getFullYear();

    const response = await fetch("/api/appointments");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const appointments = await response.json();
    //console.log("All appointments:", appointments);

    // Filter appointments for the current month and year
    const filteredAppointments = appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.startTime);
      return (
        appointmentDate.getMonth() === currentMonth - 1 && // JavaScript months are zero-based
        appointmentDate.getFullYear() === currentYear
      );
    });
    console.log("current month:", currentMonth);

    // Return the length of filtered appointments
    return filteredAppointments.length;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return 0;
  }
}
