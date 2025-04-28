import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Download, Filter, MoreHorizontal, Search, Upload, UserPlus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserManagementPage() {
  return (
    <SidebarNavigation role="admin">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
            <p className="text-muted-foreground">Manage all users across the platform</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Upload className="h-4 w-4" /> Import CSV
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" /> Export
            </Button>
            <Button className="gap-1">
              <UserPlus className="h-4 w-4" /> Add User
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <TabsList>
                <TabsTrigger value="all">All Users</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="teachers">Teachers</TabsTrigger>
                <TabsTrigger value="admins">Admins</TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search users..."
                    className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>1-10</strong> of <strong>248</strong> users
                </div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="a-z">A-Z</SelectItem>
                    <SelectItem value="z-a">Z-A</SelectItem>
                    <SelectItem value="active">Most Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <TabsContent value="all" className="m-0">
                <Card>
                  <CardContent className="p-0">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4 font-medium">Name</th>
                          <th className="text-left p-4 font-medium">Email</th>
                          <th className="text-left p-4 font-medium">Role</th>
                          <th className="text-left p-4 font-medium">Department</th>
                          <th className="text-left p-4 font-medium">Status</th>
                          <th className="text-left p-4 font-medium">Joined</th>
                          <th className="text-left p-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: "John Doe",
                            email: "john.doe@edusync.com",
                            avatar: "/placeholder.svg?height=40&width=40",
                            role: "Student",
                            department: "Computer Science",
                            status: "Active",
                            joined: "Jan 15, 2023",
                          },
                          {
                            name: "Prof. Smith",
                            email: "prof.smith@edusync.com",
                            avatar: "/placeholder.svg?height=40&width=40",
                            role: "Teacher",
                            department: "Mathematics",
                            status: "Active",
                            joined: "Mar 10, 2022",
                          },
                          {
                            name: "Jane Wilson",
                            email: "jane.wilson@edusync.com",
                            avatar: "/placeholder.svg?height=40&width=40",
                            role: "Student",
                            department: "Engineering",
                            status: "Inactive",
                            joined: "Sep 5, 2022",
                          },
                          {
                            name: "Admin User",
                            email: "admin@edusync.com",
                            avatar: "/placeholder.svg?height=40&width=40",
                            role: "Admin",
                            department: "IT Department",
                            status: "Active",
                            joined: "Jan 1, 2022",
                          },
                          {
                            name: "Sarah Chen",
                            email: "sarah.chen@edusync.com",
                            avatar: "/placeholder.svg?height=40&width=40",
                            role: "Student",
                            department: "Computer Science",
                            status: "Active",
                            joined: "Feb 20, 2023",
                          },
                          {
                            name: "Dr. Johnson",
                            email: "dr.johnson@edusync.com",
                            avatar: "/placeholder.svg?height=40&width=40",
                            role: "Teacher",
                            department: "Computer Science",
                            status: "Active",
                            joined: "Aug 15, 2022",
                          },
                          {
                            name: "Michael Rodriguez",
                            email: "michael.r@edusync.com",
                            avatar: "/placeholder.svg?height=40&width=40",
                            role: "Student",
                            department: "Business",
                            status: "Active",
                            joined: "Apr 10, 2023",
                          },
                          {
                            name: "Emily Zhang",
                            email: "emily.z@edusync.com",
                            avatar: "/placeholder.svg?height=40&width=40",
                            role: "Student",
                            department: "Mathematics",
                            status: "Inactive",
                            joined: "Nov 5, 2022",
                          },
                          {
                            name: "Prof. Williams",
                            email: "prof.williams@edusync.com",
                            avatar: "/placeholder.svg?height=40&width=40",
                            role: "Teacher",
                            department: "Engineering",
                            status: "Active",
                            joined: "Jul 20, 2022",
                          },
                          {
                            name: "Content Moderator",
                            email: "moderator@edusync.com",
                            avatar: "/placeholder.svg?height=40&width=40",
                            role: "Admin",
                            department: "Content Team",
                            status: "Active",
                            joined: "Mar 15, 2022",
                          },
                        ].map((user, i) => (
                          <tr key={i} className="border-b">
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <Avatar>
                                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                                </Avatar>
                                <span>{user.name}</span>
                              </div>
                            </td>
                            <td className="p-4">{user.email}</td>
                            <td className="p-4">
                              <Badge
                                variant={
                                  user.role === "Student"
                                    ? "default"
                                    : user.role === "Teacher"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {user.role}
                              </Badge>
                            </td>
                            <td className="p-4">{user.department}</td>
                            <td className="p-4">
                              <Badge
                                variant="outline"
                                className={
                                  user.status === "Active"
                                    ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                    : "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                                }
                              >
                                {user.status}
                              </Badge>
                            </td>
                            <td className="p-4">{user.joined}</td>
                            <td className="p-4">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                                  <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-destructive">
                                    {user.status === "Active" ? "Deactivate User" : "Activate User"}
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>

                <div className="flex items-center justify-between mt-4">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-primary/10">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      3
                    </Button>
                    <span className="mx-1">...</span>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      24
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="students" className="m-0">
                <Card>
                  <CardContent className="p-4 text-center">
                    <p>Filtered view of student users would appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="teachers" className="m-0">
                <Card>
                  <CardContent className="p-4 text-center">
                    <p>Filtered view of teacher users would appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="admins" className="m-0">
                <Card>
                  <CardContent className="p-4 text-center">
                    <p>Filtered view of admin users would appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </SidebarNavigation>
  )
}
