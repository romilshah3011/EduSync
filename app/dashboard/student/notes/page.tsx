import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, FileText, Star, BookOpen, Share2, MoreHorizontal, FolderPlus, Download } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function Notes() {
  // Mock data for notes
  const myNotes = [
    {
      id: "note-1",
      title: "Machine Learning Fundamentals",
      description: "Comprehensive notes on ML algorithms, neural networks, and practical applications",
      tags: ["Machine Learning", "AI", "Data Science"],
      lastUpdated: "2 days ago",
      isPublic: true,
      stars: 24,
      views: 156,
      forks: 8,
    },
    {
      id: "note-2",
      title: "Advanced React Patterns",
      description: "Notes on React hooks, context API, and performance optimization techniques",
      tags: ["React", "JavaScript", "Frontend"],
      lastUpdated: "1 week ago",
      isPublic: true,
      stars: 17,
      views: 89,
      forks: 5,
    },
    {
      id: "note-3",
      title: "Cybersecurity Essentials",
      description: "Private notes on network security, encryption, and ethical hacking",
      tags: ["Cybersecurity", "Network", "Security"],
      lastUpdated: "3 days ago",
      isPublic: false,
      stars: 0,
      views: 0,
      forks: 0,
    },
  ]

  // Mock data for shared notes
  const sharedNotes = [
    {
      id: "shared-1",
      title: "Database Design Principles",
      description: "Comprehensive guide to relational database design and normalization",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tags: ["SQL", "Database", "Data Modeling"],
      lastUpdated: "5 days ago",
      stars: 42,
      views: 230,
      forks: 15,
    },
    {
      id: "shared-2",
      title: "Algorithms and Data Structures",
      description: "Complete notes on common algorithms, time complexity, and optimization",
      author: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tags: ["Algorithms", "Data Structures", "Programming"],
      lastUpdated: "2 weeks ago",
      stars: 78,
      views: 412,
      forks: 26,
    },
  ]

  // Mock data for folders
  const folders = [
    { id: "folder-1", name: "Course Notes", count: 5 },
    { id: "folder-2", name: "Project Documentation", count: 3 },
    { id: "folder-3", name: "Research Papers", count: 7 },
  ]

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notes Hub</h1>
          <p className="text-muted-foreground">Create, organize, and share your study notes with the community</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FolderPlus className="h-4 w-4 mr-2" />
            New Folder
          </Button>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            New Note
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Folders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                All Notes ({myNotes.length})
              </Button>
              {folders.map((folder) => (
                <Button key={folder.id} variant="ghost" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {folder.name} ({folder.count})
                </Button>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                <Star className="h-4 w-4 mr-2" />
                Starred Notes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {Array.from(
                  new Set([...myNotes, ...sharedNotes].flatMap((note) => ("tags" in note ? note.tags : []))),
                ).map((tag, index) => (
                  <Badge key={index} variant="outline" className="cursor-pointer hover:bg-secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search notes by title, content, or tags..." className="pl-10 w-full" />
          </div>

          <Tabs defaultValue="my-notes" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="my-notes">My Notes</TabsTrigger>
              <TabsTrigger value="shared">Community Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="my-notes" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {myNotes.map((note) => (
                  <Card key={note.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Link href={`/dashboard/student/notes/${note.id}`} className="hover:underline">
                          <CardTitle className="text-lg">{note.title}</CardTitle>
                        </Link>
                        <div className="flex items-center">
                          {note.isPublic ? (
                            <Badge variant="outline" className="mr-2 bg-green-100 text-green-800">
                              Public
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="mr-2">
                              Private
                            </Badge>
                          )}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <FileText className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <CardDescription>{note.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {note.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between text-sm text-muted-foreground">
                      <div>Updated {note.lastUpdated}</div>
                      {note.isPublic && (
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 mr-1 fill-yellow-400 stroke-yellow-400" />
                            {note.stars}
                          </div>
                          <div>{note.views} views</div>
                          <div>{note.forks} forks</div>
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="shared" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {sharedNotes.map((note) => (
                  <Card key={note.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Link href={`/dashboard/student/notes/${note.id}`} className="hover:underline">
                          <CardTitle className="text-lg">{note.title}</CardTitle>
                        </Link>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Star className="h-4 w-4 mr-2" />
                              Star
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="h-4 w-4 mr-2" />
                              Fork
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardDescription>{note.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src={note.author.avatar || "/placeholder.svg"} alt={note.author.name} />
                          <AvatarFallback>{note.author.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{note.author.name}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {note.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between text-sm text-muted-foreground">
                      <div>Updated {note.lastUpdated}</div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 mr-1 fill-yellow-400 stroke-yellow-400" />
                          {note.stars}
                        </div>
                        <div>{note.views} views</div>
                        <div>{note.forks} forks</div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
