"use client"

import { use } from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { celebrities } from "@/lib/celebrities"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface PageProps {
    params: Promise<{ slug: string }>
}

export default function TicketsPage({ params }: PageProps) {
    // Unwrap params Promise for Next.js 14+
    const { slug } = use(params)

    const [showBookingModal, setShowBookingModal] = useState(false)
    const [selectedTicketType, setSelectedTicketType] = useState<"regular" | "vip" | "private-regular" | "private-vip">(
        "regular",
    )
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        paymentMethod: "cash-app",
    })

    const celebrity = celebrities.find((c) => c.slug === slug)

    if (!celebrity) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-4xl font-bold mb-4">Celebrity Not Found</h1>
                    <Link href="/celebrity" className="text-cyan-400 hover:underline">
                        Back to Celebrities
                    </Link>
                </div>
            </div>
        )
    }

    const handleBooking = (type: typeof selectedTicketType) => {
        setSelectedTicketType(type)
        setShowBookingModal(true)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Booking submitted:", { celebrity: celebrity.name, type: selectedTicketType, ...formData })
        setShowBookingModal(false)
        alert("Booking registered successfully!")
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="bg-black border-b border-cyan-500/30 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href={`/celebrity/${celebrity.slug}`}
                            className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Profile</span>
                        </Link>
                        <div className="text-center">
                            <h1 className="text-xl md:text-2xl font-bold text-cyan-400">{celebrity.name} Tour & Private Booking</h1>
                            <p className="text-sm text-gray-400">Join the legend. Be part of the experience.</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Tour Tickets Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                        <span className="text-yellow-400 mr-2">🎫</span>
                        Tour Tickets
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Regular Ticket */}
                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-orange-400 mb-3">Regular Ticket</h3>
                            <p className="text-gray-300 text-sm mb-4">{celebrity.ticketTypes.regular.description}</p>
                            <p className="text-2xl font-bold text-white mb-4">Price: ${celebrity.ticketTypes.regular.price}</p>
                            <div className="space-x-3">
                                <Button
                                    onClick={() => handleBooking("regular")}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2" variant={undefined} size={undefined}                >
                                    Register
                                </Button>
                                <Button
                                    onClick={() => handleBooking("regular")}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2" variant={undefined} size={undefined}                >
                                    Buy Now
                                </Button>
                            </div>
                        </div>

                        {/* VIP Ticket */}
                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-orange-400 mb-3">VIP Ticket</h3>
                            <p className="text-gray-300 text-sm mb-4">{celebrity.ticketTypes.vip.description}</p>
                            <p className="text-2xl font-bold text-white mb-4">Price: ${celebrity.ticketTypes.vip.price}</p>
                            <div className="space-x-3">
                                <Button
                                    onClick={() => handleBooking("vip")}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2" variant={undefined} size={undefined}                >
                                    Register
                                </Button>
                                <Button
                                    onClick={() => handleBooking("vip")}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2" variant={undefined} size={undefined}                >
                                    Buy Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Private Booking Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                        <span className="text-yellow-400 mr-2">💎</span>
                        Book Private Time with {celebrity.name}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Regular Visit */}
                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-yellow-400 mb-3">Regular Visit</h3>
                            <p className="text-gray-300 text-sm mb-4">{celebrity.privateBooking.regular.description}</p>
                            <p className="text-2xl font-bold text-white mb-4">Price: ${celebrity.privateBooking.regular.price}</p>
                            <div className="space-x-3">
                                <Button
                                    onClick={() => handleBooking("private-regular")}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2" variant={undefined} size={undefined}                >
                                    Register
                                </Button>
                                <Button
                                    onClick={() => handleBooking("private-regular")}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2" variant={undefined} size={undefined}                >
                                    Book Now
                                </Button>
                            </div>
                        </div>

                        {/* VIP Visit */}
                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-yellow-400 mb-3">VIP Visit</h3>
                            <p className="text-gray-300 text-sm mb-4">{celebrity.privateBooking.vip.description}</p>
                            <p className="text-2xl font-bold text-white mb-4">Price: ${celebrity.privateBooking.vip.price}</p>
                            <div className="space-x-3">
                                <Button
                                    onClick={() => handleBooking("private-vip")}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2" variant={undefined} size={undefined}                >
                                    Register
                                </Button>
                                <Button
                                    onClick={() => handleBooking("private-vip")}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2" variant={undefined} size={undefined}                >
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-bold text-orange-400 mb-6 flex items-center">
                        <span className="text-green-400 mr-2">💳</span>
                        Payment Methods Accepted
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
                            <span className="w-6 h-6 bg-green-500 rounded mr-2"></span>
                            Cash
                        </span>
                        <span className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center">
                            <span className="w-6 h-6 bg-purple-500 rounded mr-2"></span>
                            Zelle
                        </span>
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                            <span className="w-6 h-6 bg-blue-500 rounded mr-2"></span>
                            PayPal
                        </span>
                        <span className="bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center">
                            <span className="w-6 h-6 bg-yellow-500 rounded mr-2"></span>
                            Bitcoin
                        </span>
                        <span className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center">
                            <span className="w-6 h-6 bg-gray-500 rounded mr-2"></span>
                            USDT
                        </span>
                        <span className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center">
                            <span className="w-6 h-6 bg-red-500 rounded mr-2"></span>
                            Gift Card
                        </span>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-12 py-8 border-t border-gray-700">
                    <p className="text-gray-400 text-lg">Ticket Page</p>
                </div>
            </main>

            {/* Booking Modal */}
            {showBookingModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-cyan-400">
                                Booking - {selectedTicketType.includes("vip") ? "VIP" : "Regular"} Ticket
                            </h3>
                            <button onClick={() => setShowBookingModal(false)} className="text-gray-400 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Name</label>
                                <Input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e: { target: { value: any } }) => setFormData({ ...formData, name: e.target.value })}
                                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Email</label>
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e: { target: { value: any } }) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Payment Method</label>
                                <select
                                    value={formData.paymentMethod}
                                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-cyan-400 focus:outline-none"
                                >
                                    <option value="cash-app" className="bg-blue-600">
                                        Cash App
                                    </option>
                                    <option value="zelle">Zelle</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="bitcoin">Bitcoin</option>
                                    <option value="usdt">USDT</option>
                                    <option value="gift-card">Gift Card</option>
                                </select>
                            </div>

                            <div className="text-xs text-gray-400 italic">
                                *Pay only international <span className="text-cyan-400">&*.</span>
                            </div>

                            <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3" variant={undefined} size={undefined}>
                                Register
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}