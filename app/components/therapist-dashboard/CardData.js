import { useState, useEffect } from "react";

export function CardData({ onDataFetch }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const salesData = await calculateSalesForCurrentMonth();
        const appointmentsCountData = await monthAppointmentsCount();
        const cancelledAppointmentsData =
          await calculateCancelledAppointmentsPercentage();
        const frequentClientsData = await calculateFrequentClients();

        onDataFetch({
          sales: salesData.total,
          salesPercentage: salesData.percentage,
          appointmentsCount: appointmentsCountData.count,
          appointmentsPercentage: appointmentsCountData.percentage,
          cancelledAppointmentsCount: cancelledAppointmentsData.count,
          cancelledAppointmentsPercentage: cancelledAppointmentsData.percentage,
          frequentClients: frequentClientsData.count,
          frequentClientsPercentage: frequentClientsData.percentage,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  async function calculateSalesForCurrentMonth() {
    try {
      // Get the current date
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Adding 1 to get the month in the range 1-12
      const currentYear = currentDate.getFullYear();

      // Fetch the invoices data
      const response = await fetch("/api/invoices");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const invoices = await response.json();

      // Filter invoices for the current month and year
      const filteredInvoices = invoices.filter((invoice) => {
        const transactionDate = new Date(invoice.transactionDate);

        return (
          transactionDate.getMonth() === currentMonth - 1 && // JavaScript months are zero-based
          transactionDate.getFullYear() === currentYear
        );
      });

      // Calculate the total sales for the filtered invoices
      const totalSales = filteredInvoices.reduce((total, invoice) => {
        return total + invoice.totalCost;
      }, 0);

      //calculate the percentage of sales compared to last 30 days
      const last30Days = new Date();
      last30Days.setDate(last30Days.getDate() - 30);
      const last30DaysInvoices = invoices.filter((invoice) => {
        const transactionDate = new Date(invoice.transactionDate);
        return transactionDate >= last30Days;
      });
      const last30DaysSales = last30DaysInvoices.reduce((total, invoice) => {
        return total + invoice.totalCost;
      }, 0);
      const percentage = Math.round((totalSales / last30DaysSales) * 100);

      return {
        total: totalSales,
        percentage: percentage,
      };
    } catch (error) {
      console.error("Error calculating sales:", error);
      return 0;
    }
  }

  async function monthAppointmentsCount() {
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Adding 1 to get the month in the range 1-12
      const currentYear = currentDate.getFullYear();

      const response = await fetch("/api/appointments");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const appointments = await response.json();

      // Filter appointments for the current month and year
      const filteredAppointments = appointments.filter((appointment) => {
        const appointmentDate = new Date(appointment.startTime);
        return (
          appointmentDate.getMonth() === currentMonth - 1 && // JavaScript months are zero-based
          appointmentDate.getFullYear() === currentYear
        );
      });

      const appointmentsCount = filteredAppointments.length;

      //calculate the percentage of appointments compared to last 30 days
      const last30Days = new Date();
      last30Days.setDate(last30Days.getDate() - 30);
      const last30DaysAppointments = appointments.filter((appointment) => {
        const appointmentDate = new Date(appointment.startTime);
        return appointmentDate >= last30Days;
      });
      const last30DaysAppointmentsCount = last30DaysAppointments.length;
      const percentage = Math.round(
        (appointmentsCount / last30DaysAppointmentsCount) * 100
      );

      return {
        count: appointmentsCount,
        percentage: percentage,
      };
    } catch (error) {
      console.error("Error fetching appointments:", error);
      return 0;
    }
  }

  async function calculateCancelledAppointmentsPercentage() {
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Adding 1 to get the month in the range 1-12
      const currentYear = currentDate.getFullYear();

      const response = await fetch("/api/appointments");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const appointments = await response.json();

      // Filter appointments for the current month and year
      const filteredAppointments = appointments.filter((appointment) => {
        const appointmentDate = new Date(appointment.startTime);
        return (
          appointmentDate.getMonth() === currentMonth - 1 && // JavaScript months are zero-based
          appointmentDate.getFullYear() === currentYear
        );
      });

      const cancelledAppointments = filteredAppointments.filter(
        (appointment) => appointment.status === "cancelled"
      );

      // Return the length of filtered appointments and the percentage
      const cancelledPercentage =
        (cancelledAppointments.length / filteredAppointments.length) * 100;
      const cancelledAppointmentsCount = cancelledAppointments.length;
      return {
        count: cancelledAppointmentsCount,
        percentage: Math.round(cancelledPercentage),
      };
    } catch (error) {
      console.error("Error fetching appointments:", error);
      return 0;
    }
  }

  async function calculateFrequentClients() {
    try {
      const response = await fetch("/api/clients");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const clients = await response.json();

      // Filter clients with appointments
      const clientsWithAppt = clients.filter((client) => {
        if (client.appointments) {
          const appointments = Object.values(client.appointments);
          return appointments.length > 1; // Filter clients with more than one appointment
        }
        return false; // If client has no appointments, return false
      });

      // Calculate the percentage of clients with more than one appointment compared to the total number of clients
      const totalClients = clients.length;
      const frequentClientsCount = clientsWithAppt.length;
      const frequentClientsPercentage =
        (frequentClientsCount / totalClients) * 100;

      return {
        count: frequentClientsCount,
        percentage: Math.round(frequentClientsPercentage), // Round percentage to two decimal places
      };
    } catch (error) {
      console.error("Error calculating frequent clients:", error);
      return {
        count: 0,
        percentage: 0,
      };
    }
  }

  return null;
}
