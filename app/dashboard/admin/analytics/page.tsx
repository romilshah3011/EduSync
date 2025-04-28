"use client"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Calendar, Download, Users } from "lucide-react"
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "@/components/ui/chart"

// Mock data for analytics
const usersByRole = [
  { name: "Students", value: 1250 },
  { name: "Teachers", value: 85 },
  { name: "Admins", value: 15 },
]

const courseEngagement = [
  { name: "Computer Science", students: 450, avgCompletion: 72, avgScore: 78 },
  { name: "Engineering", students: 380, avgCompletion: 68, avgScore: 75 },
  { name: "Mathematics", students: 320, avgCompletion: 65, avgScore: 72 },
  { name: "Business", students: 280, avgCompletion: 70, avgScore: 76 },
  { name: "Arts & Humanities", students: 210, avgCompletion: 75, avgScore: 80 },
]

const monthlyActivity = [
  { name: "Jan", students: 980, teachers: 75, content: 120 },
  { name: "Feb", students: 1050, teachers: 78, content: 135 },
  { name: "Mar", students: 1100, teachers: 80, content: 150 },
  { name: "Apr", students: 1150, teachers: 82, content: 165 },
  { name: "May", students: 1200, teachers: 84, content: 180 },
  { name: "Jun", students: 1250, teachers: 85, content: 195 },
]

const studentSuccess = [
  { name: "90-100%", students: 180 },
  { name: "80-89%", students: 350 },
  { name: "70-79%", students: 420 },
  { name: "60-69%", students: 280 },
  { name: "Below 60%", students: 170 },
]

const COLORS = ["#4f46e5", "#06b6d4", "#8b5cf6", "#ec4899", "#f97316"]

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("last-6-months")

  return (
    <SidebarNavigation role="admin">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Analytics Suite</h1>
            <p className="text-muted-foreground">Comprehensive analytics and insights for your institution</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="last-6-months">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
                <SelectItem value="all-time">All Time</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-1">
              <Download className="h-4 w-4" /> Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-bold">1,350</span>
                </div>
                <span className="text-sm text-green-500">+8.2% from last month</span>
              </div>
              <div className="mt-4 h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={usersByRole}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {usersByRole.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-bold">87</span>
                </div>
                <span className="text-sm text-green-500">+12.5% from last month</span>
              </div>
              <div className="mt-4 h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={courseEngagement.slice(0, 5)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={false} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="#4f46e5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-bold">72%</span>
                </div>
                <span className="text-sm text-amber-500">-2.1% from last month</span>
              </div>
              <div className="mt-4 h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={false} />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="students" stroke="#4f46e5" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="grid grid-cols-4 md:w-[600px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Monthly Activity</CardTitle>
                <CardDescription>User activity and content creation over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyActivity}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="students" stroke="#4f46e5" name="Active Students" />
                      <Line type="monotone" dataKey="teachers" stroke="#06b6d4" name="Active Teachers" />
                      <Line type="monotone" dataKey="content" stroke="#8b5cf6" name="Content Created" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Course Engagement by Department</CardTitle>
                  <CardDescription>Average completion and scores by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={courseEngagement}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="avgCompletion" fill="#4f46e5" name="Avg. Completion %" />
                        <Bar dataKey="avgScore" fill="#8b5cf6" name="Avg. Score %" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Student Success Distribution</CardTitle>
                  <CardDescription>Distribution of students by performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={studentSuccess}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="students"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {studentSuccess.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4 mt-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Course Performance</CardTitle>
                <CardDescription>Detailed metrics for all courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={courseEngagement}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="students" fill="#4f46e5" name="Enrolled Students" />
                      <Bar dataKey="avgCompletion" fill="#06b6d4" name="Avg. Completion %" />
                      <Bar dataKey="avgScore" fill="#8b5cf6" name="Avg. Score %" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4 mt-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>User Demographics</CardTitle>
                <CardDescription>Breakdown of users by role and activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={usersByRole}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                      >
                        {usersByRole.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-4 mt-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>User Engagement Trends</CardTitle>
                <CardDescription>Activity patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyActivity}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="students" stroke="#4f46e5" name="Student Logins" />
                      <Line type="monotone" dataKey="teachers" stroke="#06b6d4" name="Teacher Logins" />
                      <Line type="monotone" dataKey="content" stroke="#8b5cf6" name="Content Interactions" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarNavigation>
  )
}
