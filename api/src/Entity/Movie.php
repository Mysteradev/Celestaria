<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\MovieRepository;
use Cocur\Slugify\Slugify;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Config\Definition\Exception\Exception;

/**
 * @ApiResource(
 *     collectionOperations={"post", "get"},
 *     itemOperations={"get"}
 * )
 * @ApiFilter(SearchFilter::class, properties={"title" : "partial"})
 * @ORM\Entity(repositoryClass=MovieRepository::class)
 *
 */
class Movie
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="string", length=65)
     */
    private string $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $thumbnailUrl;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $videoUrl;

    /**
     * @ORM\Column(type="string", length=65)
     */
    private string $movieSlug;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getThumbnailUrl(): ?string
    {
        return $this->thumbnailUrl;
    }

    public function setThumbnailUrl(string $thumbnailUrl): self
    {
        $this->thumbnailUrl = $thumbnailUrl;

        return $this;
    }

    public function getVideoUrl(): ?string
    {
        return $this->videoUrl;
    }

    public function setVideoUrl(string $videoUrl): self
    {
        $this->videoUrl = $videoUrl;

        return $this;
    }

    public function getMovieSlug(): ?string
    {
        return $this->movieSlug;
    }

  /**
   * @TODO use a listener on flush
   * @param string $movieSlug
   * @return $this
   */
    public function setMovieSlug(string $movieSlug): self
    {
        $slugify = new Slugify();
        if($movieSlug === $this->title) {
            $this->movieSlug = $slugify->slugify($movieSlug);
        } else {
            throw new Exception("Title and slug must be equal");
        }

        return $this;
    }
}
