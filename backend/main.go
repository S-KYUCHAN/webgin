package main

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/contrib/cors"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

type Article struct {
	Id      int    `json:"id"`
	Title   string `json:"title"`
	Desc    string `json:"desc"`
	Content string `json:"content"`
}

var Articles = []Article{
	Article{Id: 1, Title: "Hello", Desc: "Article Description", Content: "Article Content"},
	Article{Id: 2, Title: "Hello2", Desc: "Article Description2", Content: "Article Content2"},
}

func returnAllArticles(c *gin.Context) {

	// c.Header("Content-Type", "application/json")
	c.JSON(http.StatusOK, Articles)

	fmt.Println("Endpoint Hit: returnAllArticles")
}

func returnSingleArticles(c *gin.Context) {

	var article Article

	if articleId, err := strconv.Atoi(c.Param("id")); err == nil {
		for i := 0; i < len(Articles); i++ {
			if Articles[i].Id == articleId {
				article = Articles[i]
			}
		}
		c.JSON(http.StatusOK, article)
	} else {
		c.AbortWithStatus(http.StatusNotFound)
	}

	fmt.Println("Endpoint Hit: returnSingleArticles")
}

func main() {
	fmt.Println("web start")

	r := gin.Default()
	r.Use(cors.Default())
	r.Use(static.Serve("/", static.LocalFile("../frontend/build", true)))

	api := r.Group("/api")
	{
		api.GET("/", returnAllArticles)
		api.GET("/:id", returnSingleArticles)
		api.GET("/hello", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "world",
			})
		})
	}

	r.Run(":3030")
}
