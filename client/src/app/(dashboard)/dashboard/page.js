"use client";

import React, { useEffect, useState } from "react";
import {
  CopyIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

import { addUrls, getUrls, removeUrls } from "./actions";
import { useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const iconSize = 25;

const Dashboard = () => {
  const { toast } = useToast();
  const user = useSelector((state) => state.auth.user);
  const token = user.token;
  const queryClient = useQueryClient();
  const [addUrlData, setAddUrlData] = useState("");
  const {
    isLoading,
    isError,
    data: urlData,
    error,
    refetch,
  } = useQuery({
    queryKey: ["urls", "get"],
    queryFn: async () => {
      const data = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/urls",
        {
          withCredentials: true,
        }
      );
      console.log(data);
      return data;
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const addUrl = useMutation({
    mutationKey: ["urls", "add"],
    mutationFn: async () => {
      return axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/api/urls/shorten",
        { originalUrl: addUrlData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          withCredentials: true,
        }
      );
    },
    onError: (error) => {
      console.log(error);
      toast({ title: error.response.data.error });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["urls", "get"] });
      toast({ title: "Successfully added URL" });
    },
  });

  const deleteUrl = useMutation({
    mutationKey: ["urls", "delete"],
    mutationFn: async (id) => {
      return axios.delete(process.env.NEXT_PUBLIC_API_URL + "/api/urls/" + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        withCredentials: true,
      });
    },
    onError: (error) => {
      toast({ title: error.response.data.error });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["urls", "get"] });
      toast({ title: "Successfully deleted URL" });
    },
  });

  const handleAdd = async () => {
    addUrl.mutate();
  };

  const handleDelete = async (id) => {
    deleteUrl.mutate(id);
  };

  return (
    <div className="p-5 w-full">
      <h2 className="text-3xl">Dashboard</h2>
      {/* Search Bar and Add Button */}
      <section className="flex flex-row items-center mt-4 space-x-2">
        <Dialog>
          <DialogTrigger asChild>
            <div
              id="add"
              className="p-5 bg-primary-foreground rounded-lg cursor-pointer"
              onClick={async () => {
                let copied = await navigator.clipboard.readText();
                let validUrl;
                try {
                  validUrl = new URL(copied);
                } catch (e) {}
                if (validUrl) {
                  setAddUrlData(copied);
                }
              }}
            >
              <PlusIcon></PlusIcon>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add URL</DialogTitle>
              <DialogDescription>
                Add the original URL you want to shorten here. Click add once
                you&apos;re done
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <input
                value={addUrlData}
                onChange={(e) => {
                  setAddUrlData(e.target.value);
                }}
                type="text"
                placeholder="Original URL"
                className="border-white/30 rounded-md border-[1px] bg-white/5 w-full p-2 placeholder:text-white/30 text-white"
              />
            </div>
            <DialogFooter>
              <button
                className="bg-white/90 hover:bg-white text-background p-2 px-3 rounded-lg transition-all"
                onClick={() => {
                  handleAdd();
                }}
              >
                Add URL
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div
          id="search"
          className="flex-1 flex flex-row items-center p-4 bg-primary-foreground w-full rounded-lg  px-5"
        >
          <input
            placeholder="Search"
            type="text"
            className="bg-transparent w-full placeholder:text-muted"
          />
          <MagnifyingGlassIcon
            className="text-muted"
            height={iconSize}
            width={iconSize}
          ></MagnifyingGlassIcon>
        </div>
      </section>

      {/* URLs */}
      <section
        id="urls"
        className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 w-full"
      >
        {isError ? (
          <div>An unexpected error occurred: {error.message}</div>
        ) : (
          <></>
        )}

        {!isLoading &&
          !isError &&
          urlData.data.urls.map((urlObj) => {
            return (
              <div
                key={urlObj.id}
                id="card"
                className="flex flex-col md:flex-row justify-between bg-primary-foreground p-4 rounded-md md:space-x-3"
              >
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href={
                      location.protocol +
                      "//" +
                      location.host +
                      "/url?id=" +
                      urlObj.shortenedUrl
                    }
                  >
                    {urlObj.shortenedUrl}
                  </a>
                  <a
                    className="text-muted overflow-hidden break-all"
                    href={urlObj.originalUrl}
                  >
                    {urlObj.originalUrl}
                  </a>
                </div>
                <div className="flex flex-row md:flex-row md:space-x-2 items-center md:justify-between">
                  <CopyIcon
                    onClick={async () => {
                      await navigator.clipboard.writeText(
                        location.protocol +
                          "//" +
                          location.host +
                          "/url?id=" +
                          urlObj.shortenedUrl
                      );
                      toast({
                        title: "Copied to clipboard",
                      });
                    }}
                    className="cursor-pointer"
                    height={iconSize}
                    width={iconSize}
                  ></CopyIcon>
                  <TrashIcon
                    onClick={() => {
                      handleDelete(urlObj.id);
                    }}
                    className="cursor-pointer"
                    height={iconSize + 3}
                    width={iconSize + 3}
                  ></TrashIcon>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Dashboard;
