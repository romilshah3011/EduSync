"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  Calendar,
  Code,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Mic,
  PenTool,
  Trophy,
  User,
  Users,
  BarChart,
  Map,
  Repeat,
  GraduationCap,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ModeToggle } from "./mode-toggle"

const studentLinks = [
  {
    title: "Dashboard",
    href: "/dashboard/student",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Courses",
    href: "/dashboard/student/courses",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Assignments",
    href: "/dashboard/student/assignments",
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    title: "Quizzes",
    href: "/dashboard/student/quizzes",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Grades",
    href: "/dashboard/student/grades",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "Leaderboard",
    href: "/dashboard/student/leaderboard",
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    title: "Coding Corner",
    href: "/dashboard/student/coding-corner",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: "Events",
    href: "/dashboard/student/events",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "Analytics",
    href: "/dashboard/student/analytics",
    icon: <BarChart className="h-5 w-5" />,
  },
  {
    title: "Learning Roadmap",
    href: "/dashboard/student/roadmap",
    icon: <Map className="h-5 w-5" />,
  },
  {
    title: "Study Sync",
    href: "/dashboard/student/study-sync",
    icon: <Repeat className="h-5 w-5" />,
  },
  {
    title: "Notes",
    href: "/dashboard/student/notes",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Podcast",
    href: "/dashboard/student/podcast",
    icon: <Mic className="h-5 w-5" />,
  },
  {
    title: "Community",
    href: "/dashboard/student/community",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "AI Mentor",
    href: "/dashboard/student/ai-mentor",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Profile",
    href: "/dashboard/student/profile",
    icon: <User className="h-5 w-5" />,
  },
]

const teacherLinks = [
  {
    title: "Dashboard",
    href: "/dashboard/teacher",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Create Course",
    href: "/dashboard/teacher/courses/create",
    icon: <BookOpen className="h-5 w-5" />,
  },
]

const adminLinks = [
  {
    title: "Dashboard",
    href: "/dashboard/admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Users",
    href: "/dashboard/admin/users",
    icon: <Users className="h-5 w-5" />,
  },
]

export function SidebarNavigation({
  role,
  children,
}: {
  role: "student" | "teacher" | "admin"
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  let links

  switch (role) {
    case "student":
      links = studentLinks
      break
    case "teacher":
      links = teacherLinks
      break
    case "admin":
      links = adminLinks
      break
    default:
      links = studentLinks
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-background border-r transition-all duration-300 flex flex-col h-screen sticky top-0",
          sidebarOpen ? "w-64" : "w-16",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && <h1 className="font-bold text-xl">EduSync</h1>}
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="ml-auto">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-auto">
          <nav className="flex flex-col gap-1 p-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
                title={link.title}
              >
                {link.icon}
                {sidebarOpen && <span>{link.title}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t">
          <ModeToggle />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="container py-6 max-w-7xl">{children}</div>
      </main>
    </div>
  )
}
