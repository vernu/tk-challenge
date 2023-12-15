package main

import (
	"os"
	"tk-challenge/handlers"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	router := gin.Default()
	router.GET("/venues", handlers.SearchVenue)
	router.Run(":" + os.Getenv("PORT"))
}
