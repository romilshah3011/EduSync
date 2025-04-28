"use client"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Cpu, FileText, Mic, PlusCircle, Send, Upload } from "lucide-react"

export default function AIMentorPage() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Hello! I'm your AI learning assistant. How can I help you today with your studies?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I can help you understand that concept. Let's break it down step by step...",
        "That's a great question about data structures. The key thing to remember is...",
        "For your upcoming quiz, I recommend focusing on these key areas...",
        "Based on your course materials, here's a summary of the most important points...",
        "I've analyzed your learning patterns and suggest reviewing these topics before your exam...",
      ]

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage = {
        role: "ai",
        content: randomResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  return (
    <SidebarNavigation role="student">
      <div className="flex flex-col h-[calc(100vh-8rem)]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold tracking-tight">AI Mentor</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Upload className="h-4 w-4" /> Upload Materials
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <PlusCircle className="h-4 w-4" /> New Chat
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4 h-full">
          <div className="md:col-span-1 space-y-4">
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Learning Context</CardTitle>
                <CardDescription>Your current materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Uploaded Materials</h4>
                  {[
                    { name: "Data Structures Notes.pdf", icon: FileText },
                    { name: "Algorithm Textbook.pdf", icon: BookOpen },
                    { name: "Database Lecture Slides.pptx", icon: FileText },
                  ].map((file, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer">
                      <file.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs truncate">{file.name}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Current Courses</h4>
                  {["Data Structures & Algorithms", "Database Management", "Software Engineering"].map((course, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Recent Chats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Help with Binary Trees",
                  "Database Normalization",
                  "Preparing for Algorithms Quiz",
                  "Software Design Patterns",
                ].map((chat, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs truncate">{chat}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3 flex flex-col h-full">
            <Tabs defaultValue="chat" className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <TabsList>
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="voice">Voice Assistant</TabsTrigger>
                </TabsList>
                <Badge variant="outline" className="gap-1">
                  <Cpu className="h-3 w-3" /> AI Powered
                </Badge>
              </div>

              <TabsContent value="chat" className="flex-1 flex flex-col mt-0">
                <Card className="flex-1 flex flex-col glass-card">
                  <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, i) => (
                      <div key={i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                          <Avatar className="h-8 w-8">
                            {message.role === "ai" ? (
                              <>
                                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                <AvatarFallback>AI</AvatarFallback>
                              </>
                            ) : (
                              <>
                                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                <AvatarFallback>JD</AvatarFallback>
                              </>
                            )}
                          </Avatar>
                          <div
                            className={`rounded-lg p-3 ${
                              message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="p-4 border-t">
                    <div className="flex w-full items-center gap-2">
                      <Button variant="outline" size="icon">
                        <Upload className="h-4 w-4" />
                      </Button>
                      <Input
                        placeholder="Ask anything about your courses..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button size="icon" onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="voice" className="flex-1 flex flex-col items-center justify-center mt-0">
                <Card className="w-full max-w-md glass-card">
                  <CardHeader className="text-center">
                    <CardTitle>Voice Assistant</CardTitle>
                    <CardDescription>Ask questions using your voice</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Mic className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-center text-sm text-muted-foreground mb-6">
                      Press the button and start speaking. I'll listen and respond to your questions.
                    </p>
                    <Button className="w-full gap-2">
                      <Mic className="h-4 w-4" /> Start Speaking
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarNavigation>
  )
}
