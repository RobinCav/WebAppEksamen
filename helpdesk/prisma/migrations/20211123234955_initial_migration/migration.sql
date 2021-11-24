-- CreateTable
CREATE TABLE "comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "comment" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "issueId" TEXT NOT NULL,
    CONSTRAINT "comment_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "issue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "department" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "issue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isResolved" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "severity" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL,
    "departmentId" TEXT NOT NULL,
    CONSTRAINT "issue_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
