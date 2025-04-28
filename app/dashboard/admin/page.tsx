import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, BarChart, Bell, BookOpen, FileText, Flag, Plus, Users } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <SidebarNavigation role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
          <Button className="gap-2">
            <Bell className="h-4 w-4" /> Create Announcement
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Users",
              value: "1,248",
              description: "+24 this week",
              icon: Users,
              color: "bg-blue-500/10 text-blue-500",
            },
            {
              title: "Active Courses",
              value: "42",
              description: "Across 8 departments",
              icon: BookOpen,
              color: "bg-green-500/10 text-green-500",
            },
            {
              title: "Flagged Content",
              value: "7",
              description: "Needs review",
              icon: Flag,
              color: "bg-red-500/10 text-red-500",
            },
            {
              title: "System Health",
              value: "98%",
              description: "All systems operational",
              icon: BarChart,
              color: "bg-purple-500/10 text-purple-500",
            },
          ].map((item, i) => (
            <Card key={i} className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <div className={`rounded-full p-2 ${item.color}`}>
                  <item.icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-4 glass-card">
            <CardHeader>
              <CardTitle>Platform Usage</CardTitle>
              <CardDescription>Daily active users over the past week</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[200px] flex items-end gap-2">
                {[60, 75, 90, 85, 95, 70, 80].map((height, i) => (
                  <div key={i} className="relative flex flex-1 flex-col items-center">
                    <div className="w-full rounded-md bg-primary" style={{ height: `${height}%` }} />
                    <span className="mt-2 text-xs">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 glass-card">
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>Recent alerts and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Storage Usage Alert",
                  description: "Storage capacity at 85%, consider cleanup",
                  time: "2 hours ago",
                  type: "warning",
                },
                {
                  title: "New User Registrations",
                  description: "24 new users registered today",
                  time: "Today",
                  type: "info",
                },
                {
                  title: "Scheduled Maintenance",
                  description: "System update scheduled for Sunday, 2 AM",
                  time: "1 day ago",
                  type: "info",
                },
              ].map((notification, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-muted">
                  <div className={notification.type === "warning" ? "text-amber-500" : "text-blue-500"}>
                    {notification.type === "warning" ? (
                      <AlertTriangle className="h-5 w-5" />
                    ) : (
                      <Bell className="h-5 w-5" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.description}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="moderation">
          <TabsList>
            <TabsTrigger value="moderation">Moderation Queue</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="analytics">Platform Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="moderation" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Flagged Content</h3>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/admin/moderation">View All</Link>
              </Button>
            </div>

            <Card className="glass-card">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Content</th>
                      <th className="text-left p-4 font-medium">Type</th>
                      <th className="text-left p-4 font-medium">Reported By</th>
                      <th className="text-left p-4 font-medium">Date</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        content: "Inappropriate comment in CS101 forum",
                        type: "Comment",
                        reportedBy: "Prof. Johnson",
                        date: "Today",
                        status: "Pending",
                      },
                      {
                        content: "Plagiarized assignment submission",
                        type: "Assignment",
                        reportedBy: "Dr. Smith",
                        date: "Yesterday",
                        status: "Under Review",
                      },
                      {
                        content: "Offensive content in community post",
                        type: "Post",
                        reportedBy: "Student Council",
                        date: "2 days ago",
                        status: "Pending",
                      },
                    ].map((item, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4">{item.content}</td>
                        <td className="p-4">
                          <Badge variant="outline">{item.type}</Badge>
                        </td>
                        <td className="p-4">{item.reportedBy}</td>
                        <td className="p-4">{item.date}</td>
                        <td className="p-4">
                          <Badge
                            variant={
                              item.status === "Pending"
                                ? "default"
                                : item.status === "Under Review"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {item.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                            <Button variant="ghost" size="sm">
                              Dismiss
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">User Management</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Plus className="h-3 w-3" /> Add User
                </Button>
                <Button variant="outline" size="sm">
                  Import CSV
                </Button>
              </div>
            </div>

            <Card className="glass-card">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Name</th>
                      <th className="text-left p-4 font-medium">Role</th>
                      <th className="text-left p-4 font-medium">Department</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Last Active</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "John Doe",
                        role: "Student",
                        department: "Computer Science",
                        status: "Active",
                        lastActive: "Today",
                      },
                      {
                        name: "Prof. Smith",
                        role: "Teacher",
                        department: "Mathematics",
                        status: "Active",
                        lastActive: "Yesterday",
                      },
                      {
                        name: "Jane Wilson",
                        role: "Student",
                        department: "Engineering",
                        status: "Inactive",
                        lastActive: "2 weeks ago",
                      },
                    ].map((user, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4">{user.name}</td>
                        <td className="p-4">
                          <Badge
                            variant={
                              user.role === "Student" ? "default" : user.role === "Teacher" ? "secondary" : "outline"
                            }
                          >
                            {user.role}
                          </Badge>
                        </td>
                        <td className="p-4">{user.department}</td>
                        <td className="p-4">
                          <Badge variant={user.status === "Active" ? "outline" : "secondary"}>{user.status}</Badge>
                        </td>
                        <td className="p-4">{user.lastActive}</td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Platform Analytics</h3>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/admin/analytics">Detailed Reports</Link>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Department Performance</CardTitle>
                  <CardDescription>Average engagement by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { department: "Computer Science", engagement: 92 },
                      { department: "Mathematics", engagement: 78 },
                      { department: "Engineering", engagement: 85 },
                      { department: "Business", engagement: 72 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.department}</span>
                          <span className="text-sm text-muted-foreground">{item.engagement}%</span>
                        </div>
                        <Progress value={item.engagement} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Content Statistics</CardTitle>
                  <CardDescription>Platform content overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: "Courses", count: 42, icon: BookOpen },
                      { type: "Assignments", count: 186, icon: FileText },
                      { type: "Community Posts", count: 324, icon: Users },
                      { type: "Flagged Content", count: 7, icon: Flag },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg border">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-primary/10 p-2">
                            <item.icon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{item.type}</span>
                        </div>
                        <span className="text-sm font-bold">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarNavigation>
  )
}
